> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laenvironment/mechanismbiometry/islockedout](https://developer.apple.com/documentation/localauthentication/laenvironment/mechanismbiometry/islockedout)

# isLockedOut (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
var isLockedOut: Bool { get }
```

<a id="discussion"></a>

## Discussion

Whether biometry is locked out.

The system might lock the user out of biometry for various reasons. For example, with Face ID, the user is locked out after 5 failed match attempts in row. To recover from bio lockout, users need to enter their passcode (e.g. during device ulock).

# isLockedOut (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isLockedOut;
```

<a id="discussion"></a>

## Discussion

Whether biometry is locked out.

The system might lock the user out of biometry for various reasons. For example, with Face ID, the user is locked out after 5 failed match attempts in row. To recover from bio lockout, users need to enter their passcode (e.g. during device ulock).
