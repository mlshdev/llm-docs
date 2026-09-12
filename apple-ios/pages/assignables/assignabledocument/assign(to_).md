> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/assign(to:)](https://developer.apple.com/documentation/assignables/assignabledocument/assign(to:))

# assign(to:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ (deprecated in 18.0) · iPadOS 17.4+ (deprecated in 18.0) · Mac Catalyst 17.4+ (deprecated in 18.0) · visionOS

Assign this document to a user.

> Use makeAssignedWorkDocument() instead

## Declaration

```swift
func assign(to userIdentity: AnyUserIdentity) throws -> AssignedWorkDocument
```

## Parameters

- `userIdentity`: The identity of the user to assign this document to.

<a id="return-value"></a>

## Return Value

A work document for the taker of the assignable document.
