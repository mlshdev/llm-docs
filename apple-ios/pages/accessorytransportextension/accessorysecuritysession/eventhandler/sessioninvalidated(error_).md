> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorysecuritysession/eventhandler/sessioninvalidated(error:)](https://developer.apple.com/documentation/accessorytransportextension/accessorysecuritysession/eventhandler/sessioninvalidated(error:))

# sessionInvalidated(error:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Handles session invalidation.

## Declaration

```swift
func sessionInvalidated(error: AccessorySecuritySession.Error?)
```

## Parameters

- `error`: An optional error that indicates the reason for invalidation.

<a id="discussion"></a>

## Discussion

Clean up any stored key material when the system calls this method.
