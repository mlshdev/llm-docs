> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1547477-kauth_cred_ismember_gid

# kauth_cred_ismember_gid

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
int kauth_cred_ismember_gid(kauth_cred_t _cred, gid_t _gid, int *_resultp);
```
