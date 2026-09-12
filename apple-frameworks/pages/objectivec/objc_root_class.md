> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_root_class](https://developer.apple.com/documentation/objectivec/objc_root_class)

# OBJC_ROOT_CLASS

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

If you define an Objective-C root class, you receive a compiler error indicating that the class is defined without specifying a base class. You can avoid this compiler error by preceding the definition of the root class (that is, before the `@interface` directive) with `OBJC_ROOT_CLASS`.

## Declaration

```objectivec
#define OBJC_ROOT_CLASS
```
