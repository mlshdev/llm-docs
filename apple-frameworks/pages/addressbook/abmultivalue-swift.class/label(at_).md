> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmultivalue-swift.class/label(at:)](https://developer.apple.com/documentation/addressbook/abmultivalue-swift.class/label(at:))

# label(at:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the label for the given index.

## Declaration

```swift
func label(at index: Int) -> String!
```

## Parameters

- `index`: The index for the label to be returned.

<a id="Discussion"></a>

## Discussion

If the `index` argument is out of bounds, this method raises an exception.

## See Also

### Accessing entries

- [value(at:)](value%28at_%29.md): Returns the value for the given index.
- [value(forIdentifier:)](value%28foridentifier_%29.md): Returns the value for the given identifier.
- [label(forIdentifier:)](label%28foridentifier_%29.md): Returns the label for the given identifier.

# labelAtIndex: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the label for the given index.

## Declaration

```objectivec
- (NSString *) labelAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index for the label to be returned.

<a id="Discussion"></a>

## Discussion

If the `index` argument is out of bounds, this method raises an exception.

## See Also

### Accessing entries

- [valueAtIndex:](value%28at_%29.md): Returns the value for the given index.
- [valueForIdentifier:](value%28foridentifier_%29.md): Returns the value for the given identifier.
- [labelForIdentifier:](label%28foridentifier_%29.md): Returns the label for the given identifier.
