> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1566736-fsreplaceobject](https://developer.apple.com/documentation/coreservices/1566736-fsreplaceobject)

# FSReplaceObject

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.8)

## Declaration

```objectivec
OSStatus FSReplaceObject(const FSRef *originalObject, const FSRef *replacementObject, CFStringRef newName, CFStringRef temporaryName, const FSRef *temporaryDirectory, OptionBits flags, FSRef *resultObject);
```
