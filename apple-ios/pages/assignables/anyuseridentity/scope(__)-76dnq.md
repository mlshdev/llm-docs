> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/anyuseridentity/scope(_:)-76dnq](https://developer.apple.com/documentation/assignables/anyuseridentity/scope(_:)-76dnq)

# scope(\_:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Sets the user identity for document-related operations that occur within the async closure passed in.

## Declaration

```swift
@discardableResult func scope<R>(_ access: () async throws -> R) async rethrows -> R
```

## Parameters

- `access`: An async closure containing document-related operations . Operations in the closure will be attributed to this user identity.

<a id="return-value"></a>

## Return Value

The result of the closure.

## See Also

### Setting the scope

- [scope(\_:)](scope%28__%29-1wfwz.md): Sets the user identity for document-related operations that occur within the closure passed in.
