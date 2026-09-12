> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmutablemultivalue-swift.class/setprimaryidentifier(_:)](https://developer.apple.com/documentation/addressbook/abmutablemultivalue-swift.class/setprimaryidentifier(_:))

# setPrimaryIdentifier(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Sets the primary value to be the value for the given identifier.

## Declaration

```swift
func setPrimaryIdentifier(_ identifier: String!) -> Bool
```

## Parameters

- `identifier`: The identifier whose value will be used as the primary value for a multivalue property.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the identifier is `nil`, this method raises an exception. Use the [identifier(at:)](../abmultivalue-swift.class/identifier%28at_%29.md) method to get the identifier given the index.

# setPrimaryIdentifier: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Sets the primary value to be the value for the given identifier.

## Declaration

```objectivec
- (BOOL) setPrimaryIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The identifier whose value will be used as the primary value for a multivalue property.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the identifier is `nil`, this method raises an exception. Use the [identifierAtIndex:](../abmultivalue-swift.class/identifier%28at_%29.md) method to get the identifier given the index.
