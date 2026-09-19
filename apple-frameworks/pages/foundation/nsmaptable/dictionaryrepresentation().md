> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsmaptable/dictionaryrepresentation()

# dictionaryRepresentation() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary representation of the map table.

## Declaration

```swift
func dictionaryRepresentation() -> [AnyHashable : ObjectType]
```

<a id="return-value"></a>

## Return Value

A dictionary representation of the map table.

<a id="Discussion"></a>

## Discussion

The map table’s values and keys must conform to all the requirements specified in [setObject(\_:forKey:)](../nsmutabledictionary/setobject%28__forkey_%29.md) in [NSMutableDictionary](../nsmutabledictionary.md).

# dictionaryRepresentation (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary representation of the map table.

## Declaration

```objectivec
- (NSDictionary<id,id> *) dictionaryRepresentation;
```

<a id="return-value"></a>

## Return Value

A dictionary representation of the map table.

<a id="Discussion"></a>

## Discussion

The map table’s values and keys must conform to all the requirements specified in [setObject:forKey:](../nsmutabledictionary/setobject%28__forkey_%29.md) in [NSMutableDictionary](../nsmutabledictionary.md).
