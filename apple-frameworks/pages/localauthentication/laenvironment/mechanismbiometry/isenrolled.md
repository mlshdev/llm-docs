> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laenvironment/mechanismbiometry/isenrolled](https://developer.apple.com/documentation/localauthentication/laenvironment/mechanismbiometry/isenrolled)

# isEnrolled (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
var isEnrolled: Bool { get }
```

<a id="discussion"></a>

## Discussion

Whether the user has enrolled this biometry.

Even if biometry is enrolled, it does not necessarily mean that it can be used. You should check @c isUsable property to see if it is available for use.

# isEnrolled (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isEnrolled;
```

<a id="discussion"></a>

## Discussion

Whether the user has enrolled this biometry.

Even if biometry is enrolled, it does not necessarily mean that it can be used. You should check @c isUsable property to see if it is available for use.
