> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/laenvironment/mechanism/isusable

# isUsable (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
var isUsable: Bool { get }
```

<a id="discussion"></a>

## Discussion

Whether the mechanism is available for use, i.e. whether the relevant preflight call of @c canEvaluatePolicy would succeed.

properties of the subclass to determine why mechanism can’t be used.

# isUsable (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isUsable;
```

<a id="discussion"></a>

## Discussion

Whether the mechanism is available for use, i.e. whether the relevant preflight call of @c canEvaluatePolicy would succeed.

properties of the subclass to determine why mechanism can’t be used.
