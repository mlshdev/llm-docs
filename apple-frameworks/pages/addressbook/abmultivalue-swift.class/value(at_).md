> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbook/abmultivalue-swift.class/value(at:)

# value(at:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the value for the given index.

## Declaration

```swift
func value(at index: Int) -> Any!
```

## Parameters

- `index`: The index for the value to be returned.

<a id="Discussion"></a>

## Discussion

If the `index` argument is out of bounds, this method raises an exception.

## See Also

### Accessing entries

- [label(at:)](label%28at_%29.md): Returns the label for the given index.
- [value(forIdentifier:)](value%28foridentifier_%29.md): Returns the value for the given identifier.
- [label(forIdentifier:)](label%28foridentifier_%29.md): Returns the label for the given identifier.

# valueAtIndex: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the value for the given index.

## Declaration

```objectivec
- (id) valueAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index for the value to be returned.

<a id="Discussion"></a>

## Discussion

If the `index` argument is out of bounds, this method raises an exception.

## See Also

### Accessing entries

- [labelAtIndex:](label%28at_%29.md): Returns the label for the given index.
- [valueForIdentifier:](value%28foridentifier_%29.md): Returns the value for the given identifier.
- [labelForIdentifier:](label%28foridentifier_%29.md): Returns the label for the given identifier.
