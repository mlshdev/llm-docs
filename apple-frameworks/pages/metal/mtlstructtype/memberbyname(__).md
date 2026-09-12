> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstructtype/memberbyname(_:)](https://developer.apple.com/documentation/metal/mtlstructtype/memberbyname(_:))

# memberByName(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Provides a representation of a struct member.

## Declaration

```swift
func memberByName(_ name: String) -> MTLStructMember?
```

## Parameters

- `name`: The name of a member in the struct.

<a id="return-value"></a>

## Return Value

An object that represents the named struct member. If `name` does not match a member name, `nil` is returned.

## See Also

### Obtaining information about struct members

- [members](members.md): An array of instances that describe the fields in the struct.

# memberByName: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Provides a representation of a struct member.

## Declaration

```objectivec
- (MTLStructMember *) memberByName:(NSString *) name;
```

## Parameters

- `name`: The name of a member in the struct.

<a id="return-value"></a>

## Return Value

An object that represents the named struct member. If `name` does not match a member name, `nil` is returned.

## See Also

### Obtaining information about struct members

- [members](members.md): An array of instances that describe the fields in the struct.
