> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inusercontext/becomecurrent()

# becomeCurrent() (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Replaces the previous context object with the current context object that has the same underlying type.

## Declaration

```swift
func becomeCurrent()
```

<a id="Discussion"></a>

## Discussion

Call this function when your app becomes active or there’s a significant change in the user’s status or library.

# becomeCurrent (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Replaces the previous context object with the current context object that has the same underlying type.

## Declaration

```objectivec
- (void) becomeCurrent;
```

<a id="Discussion"></a>

## Discussion

Call this function when your app becomes active or there’s a significant change in the user’s status or library.
