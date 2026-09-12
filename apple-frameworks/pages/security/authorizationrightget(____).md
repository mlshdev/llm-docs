> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationrightget(_:_:)](https://developer.apple.com/documentation/security/authorizationrightget(_:_:))

# AuthorizationRightGet(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves a right definition as a dictionary.

## Declaration

```swift
func AuthorizationRightGet(_ rightName: UnsafePointer<CChar>, _ rightDefinition: UnsafeMutablePointer<CFDictionary?>?) -> OSStatus
```

## Parameters

- `rightName`: An ASCII character string representing the right name. Wildcard right names are valid.
- `rightDefinition`: A reference to a dictionary. On return, this points to a dictionary of keys that define the right. Passing `nil` checks if the right is defined. You should release the memory used by the returned dictionary.

<a id="return-value"></a>

## Return Value

A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

You do not need an authorization reference to use this function because the policy database is world readable.

# AuthorizationRightGet (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Retrieves a right definition as a dictionary.

## Declaration

```objectivec
OSStatus AuthorizationRightGet(const char *rightName, CFDictionaryRef*rightDefinition);
```

## Parameters

- `rightName`: An ASCII character string representing the right name. Wildcard right names are valid.
- `rightDefinition`: A reference to a dictionary. On return, this points to a dictionary of keys that define the right. Passing `nil` checks if the right is defined. You should release the memory used by the returned dictionary.

<a id="return-value"></a>

## Return Value

A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

You do not need an authorization reference to use this function because the policy database is world readable.
