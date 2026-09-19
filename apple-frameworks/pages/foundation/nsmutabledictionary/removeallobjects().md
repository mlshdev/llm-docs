> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsmutabledictionary/removeallobjects()

# removeAllObjects() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Empties the dictionary of its entries.

## Declaration

```swift
func removeAllObjects()
```

<a id="Discussion"></a>

## Discussion

Each key and corresponding value object is sent a [release](../../objectivec/nsobject-c.protocol/release.md) message.

## See Also

### Removing Entries From a Mutable Dictionary

- [removeObject(forKey:)](removeobject%28forkey_%29.md): Removes a given key and its associated value from the dictionary.
- [removeObjects(forKeys:)](removeobjects%28forkeys_%29.md): Removes from the dictionary entries specified by elements in a given array.

# removeAllObjects (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Empties the dictionary of its entries.

## Declaration

```objectivec
- (void) removeAllObjects;
```

<a id="Discussion"></a>

## Discussion

Each key and corresponding value object is sent a [release](../../objectivec/nsobject-c.protocol/release.md) message.

## See Also

### Removing Entries From a Mutable Dictionary

- [removeObjectForKey:](removeobject%28forkey_%29.md): Removes a given key and its associated value from the dictionary.
- [removeObjectsForKeys:](removeobjects%28forkeys_%29.md): Removes from the dictionary entries specified by elements in a given array.
