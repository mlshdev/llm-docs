> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/crypto_random_uniform_fn_t](https://developer.apple.com/documentation/kernel/crypto_random_uniform_fn_t)

# crypto_random_uniform_fn_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 13.1+

## Declaration

```objectivec
typedef void (*crypto_random_uniform_fn_t)(crypto_random_ctx_t ctx, uint64_t bound, uint64_t *random);
```
