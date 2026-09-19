> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/assignables/assignable/assign(to:)-4jnsl

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

## Default Implementations

### Assignable Implementations

- [assign(to:)](assign%28to_%29-629jq.md): Deprecated. Assign this document to a user.

## See Also

### Assigning a document

- [assign(to:)](assign%28to_%29-4mit8.md): Deprecated. Assign this document to a user.
