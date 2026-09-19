> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbook/abmultivalue-swift.class/index(foridentifier:)

# index(forIdentifier:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index for the given identifier.

## Declaration

```swift
func index(forIdentifier identifier: String!) -> Int
```

## Parameters

- `identifier`: The identifier whose index will be returned.

<a id="Discussion"></a>

## Discussion

If the identifier is not found, returns `NSNotFound`.

## See Also

### Accessing identifiers

- [identifier(at:)](identifier%28at_%29.md): Returns the identifier for the given index.

# indexForIdentifier: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index for the given identifier.

## Declaration

```objectivec
- (NSUInteger) indexForIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The identifier whose index will be returned.

<a id="Discussion"></a>

## Discussion

If the identifier is not found, returns `NSNotFound`.

## See Also

### Accessing identifiers

- [identifierAtIndex:](identifier%28at_%29.md): Returns the identifier for the given index.
