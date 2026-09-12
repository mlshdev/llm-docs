> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/objectzone](https://developer.apple.com/documentation/foundation/nscoder/objectzone)

# objectZone

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This method is present for historical reasons and has no effect.

## Declaration

```objectivec
- (NSZone *) objectZone;
```

<a id="Discussion"></a>

## Discussion

`NSCoder`’s implementation returns the default memory zone, as given by `NSDefaultMallocZone()`.

## See Also

### Managing Zones

- [setObjectZone:](setobjectzone_.md): This method is present for historical reasons and has no effect.
