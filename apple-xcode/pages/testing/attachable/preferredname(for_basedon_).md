> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachable/preferredname(for:basedon:)](https://developer.apple.com/documentation/testing/attachable/preferredname(for:basedon:))

# preferredName(for:basedOn:)

**Framework:** Swift Testing  
**Kind:** Instance Method  
**Availability:** Swift 6.2+ · Xcode 26.0+

Generate a preferred name for the given attachment.

## Declaration

```swift
borrowing func preferredName(for attachment: borrowing Attachment<Self>, basedOn suggestedName: String) -> String
```

## Parameters

- `attachment`: The attachment that needs to be named.
- `suggestedName`: A suggested name to use as the basis of the preferred name. This string was provided by the developer when they initialized `attachment`.

<a id="return-value"></a>

## Return Value

The preferred name for `attachment`.

<a id="discussion"></a>

## Discussion

The testing library uses this function to determine the best name to use when saving `attachment`. The default implementation of this function returns `suggestedName` without any changes.

## Default Implementations

### Attachable Implementations

- [preferredName(for:basedOn:)](preferredname%28for_basedon_%29-9bptj.md): Conforms when `Self` conforms to `StringProtocol`.
- [preferredName(for:basedOn:)](preferredname%28for_basedon_%29-aal5.md)
