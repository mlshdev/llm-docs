> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/useridentity/scope(_:)-esta](https://developer.apple.com/documentation/assignables/useridentity/scope(_:)-esta)

# scope(\_:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Sets the user identity for document-related operations that occur within the closure passed in.

## Declaration

```swift
@discardableResult func scope<R>(_ access: () throws -> R) rethrows -> R
```

## Parameters

- `access`: A closure containing document-related operations . Operations in the closure will be attributed to this user identity.

<a id="return-value"></a>

## Return Value

The result of the closure.

## See Also

### Setting the scope

- [scope(\_:)](scope%28__%29-j2jq.md): Sets the user identity for document-related operations that occur within the async closure passed in.
