> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbook/abmultivalue-swift.class/propertytype()

# propertyType() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the type for the values in a multivalue list.

## Declaration

```swift
func propertyType() -> ABPropertyType
```

<a id="Discussion"></a>

## Discussion

If the multivalue list is empty or its values are of different types, it returns `kABErrorInProperty`.

## See Also

### Querying the list

- [count()](count%28%29.md): Returns the number of entries in a multivalue list.

# propertyType (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the type for the values in a multivalue list.

## Declaration

```objectivec
- (ABPropertyType) propertyType;
```

<a id="Discussion"></a>

## Discussion

If the multivalue list is empty or its values are of different types, it returns `kABErrorInProperty`.

## See Also

### Querying the list

- [count](count%28%29.md): Returns the number of entries in a multivalue list.
