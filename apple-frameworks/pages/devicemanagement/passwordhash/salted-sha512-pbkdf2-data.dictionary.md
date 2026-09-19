> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/passwordhash/salted-sha512-pbkdf2-data.dictionary

# PasswordHash.SALTED-SHA512-PBKDF2

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 10.11+

A dictionary that contains the elements to create the password hash.

## Declaration

```
object PasswordHash.SALTED-SHA512-PBKDF2
```

## Properties

- `entropy` — `data` (required): The derived key from the password hash; for example, from `CCKeyDerivationPBKDF()`.
- `iterations` — `integer` (required): The number of iterations; for example, from `CCCalibratePBKDF()` using a minimum hash time of 100 milliseconds, or if unknown, a number in the range of 20,000 to 40,000 iterations.
- `salt` — `data` (required): The 32-byte randomized data; for example, from `CCRandomCopyBytes()`.
