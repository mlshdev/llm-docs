> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1515964-set_security_token](https://developer.apple.com/documentation/kernel/1515964-set_security_token)

# set_security_token

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
int set_security_token(struct proc *p, struct ucred *cred);
```
