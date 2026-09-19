> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1547330-kauth_cred_ismember_guid

# kauth_cred_ismember_guid

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
int kauth_cred_ismember_guid(kauth_cred_t _cred, guid_t *_guidp, int *_resultp);
```
