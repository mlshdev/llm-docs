> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstermofaddress/currentuser](https://developer.apple.com/documentation/foundation/nstermofaddress/currentuser)

# currentUser

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The term of address that should be used for addressing the user

## Declaration

```objectivec
+ (instancetype) currentUser;
```

<a id="discussion"></a>

## Discussion

This term of address will only compare equal to another `+[NSTermOfAddress currentUser]`
