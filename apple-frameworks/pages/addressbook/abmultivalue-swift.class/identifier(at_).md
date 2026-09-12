> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmultivalue-swift.class/identifier(at:)](https://developer.apple.com/documentation/addressbook/abmultivalue-swift.class/identifier(at:))

# identifier(at:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the identifier for the given index.

## Declaration

```swift
func identifier(at index: Int) -> String!
```

## Parameters

- `index`: The index of the identifier to be returned.

<a id="Discussion"></a>

## Discussion

If the `index` argument is out of bounds, this method raises an exception.

## See Also

### Accessing identifiers

- [index(forIdentifier:)](index%28foridentifier_%29.md): Returns the index for the given identifier.

# identifierAtIndex: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the identifier for the given index.

## Declaration

```objectivec
- (NSString *) identifierAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of the identifier to be returned.

<a id="Discussion"></a>

## Discussion

If the `index` argument is out of bounds, this method raises an exception.

## See Also

### Accessing identifiers

- [indexForIdentifier:](index%28foridentifier_%29.md): Returns the index for the given identifier.
