> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/crypto_random_uniform_fn_t

# crypto_random_uniform_fn_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 13.1+

## Declaration

```objectivec
typedef void (*crypto_random_uniform_fn_t)(crypto_random_ctx_t ctx, uint64_t bound, uint64_t *random);
```
