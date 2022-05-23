import { randomBytes as _randomBytes } from "crypto";
import { arrayify } from "@ethersproject/bytes";
export function randomBytes(length) {
    return arrayify(_randomBytes(length));
}
//# sourceMappingURL=random.js.map