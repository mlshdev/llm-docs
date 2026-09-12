> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdiscardablecontent/endcontentaccess()](https://developer.apple.com/documentation/foundation/nsdiscardablecontent/endcontentaccess())

# endContentAccess() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Called if the discardable contents are no longer being accessed.

## Declaration

```swift
func endContentAccess()
```

<a id="Discussion"></a>

## Discussion

This method decrements the counter variable of the object, which will usually bring the value of the counter variable back down to 0, which allows the discardable contents of the object to be thrown away if necessary.

## See Also

### Accessing Content

- [beginContentAccess()](begincontentaccess%28%29.md): Returns a Boolean value indicating whether the discardable contents are still available and have been successfully accessed.

# endContentAccess (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Called if the discardable contents are no longer being accessed.

## Declaration

```objectivec
- (void) endContentAccess;
```

<a id="Discussion"></a>

## Discussion

This method decrements the counter variable of the object, which will usually bring the value of the counter variable back down to 0, which allows the discardable contents of the object to be thrown away if necessary.

## See Also

### Accessing Content

- [beginContentAccess](begincontentaccess%28%29.md): Returns a Boolean value indicating whether the discardable contents are still available and have been successfully accessed.
