> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbook/abmultivalue-swift.class/label(foridentifier:)

# label(forIdentifier:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the label for the given identifier.

## Declaration

```swift
func label(forIdentifier identifier: String!) -> Any!
```

## Parameters

- `identifier`: The identifier for the label to be returned.

<a id="Discussion"></a>

## Discussion

If the identifier is not found, this method returns `nil`.

## See Also

### Accessing entries

- [label(at:)](label%28at_%29.md): Returns the label for the given index.
- [value(at:)](value%28at_%29.md): Returns the value for the given index.
- [value(forIdentifier:)](value%28foridentifier_%29.md): Returns the value for the given identifier.

# labelForIdentifier: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the label for the given identifier.

## Declaration

```objectivec
- (id) labelForIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The identifier for the label to be returned.

<a id="Discussion"></a>

## Discussion

If the identifier is not found, this method returns `nil`.

## See Also

### Accessing entries

- [labelAtIndex:](label%28at_%29.md): Returns the label for the given index.
- [valueAtIndex:](value%28at_%29.md): Returns the value for the given index.
- [valueForIdentifier:](value%28foridentifier_%29.md): Returns the value for the given identifier.
