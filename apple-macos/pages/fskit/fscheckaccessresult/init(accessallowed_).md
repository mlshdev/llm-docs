> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscheckaccessresult/init(accessallowed:)](https://developer.apple.com/documentation/fskit/fscheckaccessresult/init(accessallowed:))

# init(accessAllowed:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for an access-checking operation.

## Declaration

```swift
init?(accessAllowed: Bool)
```

## Parameters

- `accessAllowed`: A Boolean value indicating whether the file system grants the requested access to the item. Pass `true` (Swift) or `YES` (Obj-C) to allow access, `false` (Swift) or `NO` (Obj-C) to deny access.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

# initWithAccessAllowed: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for an access-checking operation.

## Declaration

```objectivec
- (instancetype) initWithAccessAllowed:(BOOL) accessAllowed;
```

## Parameters

- `accessAllowed`: A Boolean value indicating whether the file system grants the requested access to the item. Pass `true` (Swift) or `YES` (Obj-C) to allow access, `false` (Swift) or `NO` (Obj-C) to deny access.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.
