> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcshandle/uri(_:)](https://developer.apple.com/documentation/telephonymessagingkit/rcshandle/uri(_:))

# RCSHandle.uri(\_:)

**Framework:** TelephonyMessagingKit  
**Kind:** Case  
**Availability:** iOS 26.0+

A handle that represents a single recipient or sender, as identified by a URI.

## Declaration

```swift
case uri(RCSHandle.URI)
```

<a id="discussion"></a>

## Discussion

To create a URI handle from a phone number, use the [phoneNumber(\_:)](phonenumber%28__%29.md) method. The created URI will use the `tel:` scheme.

## See Also

### Accessing handle values

- [RCSHandle.URI](uri.md): A structure that represents an RCS URI handle.
- [RCSHandle.group(\_:)](group%28__%29.md): A handle that represents a group.
- [RCSHandle.Group](group.md): A structure that represents an RCS group handle.
