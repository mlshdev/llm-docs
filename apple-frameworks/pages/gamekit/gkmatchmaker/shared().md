> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/shared()](https://developer.apple.com/documentation/gamekit/gkmatchmaker/shared())

# shared() (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Returns the singleton matchmaker instance.

## Declaration

```swift
class func shared() -> GKMatchmaker
```

<a id="return-value"></a>

## Return Value

The shared matchmaker instance.

<a id="Discussion"></a>

## Discussion

Games don’t create a `GKMatchmaker` object. Use this method instead to get the shared singleton instance.

# sharedMatchmaker (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Returns the singleton matchmaker instance.

## Declaration

```objectivec
+ (GKMatchmaker *) sharedMatchmaker;
```

<a id="return-value"></a>

## Return Value

The shared matchmaker instance.

<a id="Discussion"></a>

## Discussion

Games don’t create a `GKMatchmaker` object. Use this method instead to get the shared singleton instance.
