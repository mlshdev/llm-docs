> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmultivalue-swift.class/propertytype()](https://developer.apple.com/documentation/addressbook/abmultivalue-swift.class/propertytype())

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
