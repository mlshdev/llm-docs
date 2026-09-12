> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityfoundation/sfauthorization/authorization()](https://developer.apple.com/documentation/securityfoundation/sfauthorization/authorization())

# authorization() (Swift)

**Framework:** Security Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Returns an authorization object initialized with a default environment, flags, and rights.

## Declaration

```swift
class func authorization() -> Any!
```

<a id="Return-value"></a>

## Return value

The authorization object.

## See Also

### Allocating and initializing an authorization object

- [authorization(with:rights:environment:)](authorization%28with_rights_environment_%29.md): Returns an authorization object initialized with the specified flags, rights and environment.
- [init()](init%28%29.md): Initializes an authorization object with default environment, flags, and rights.
- [init(flags:rights:environment:)](init%28flags_rights_environment_%29.md): Initializes an authorization object with the specified flags, rights, and environment.

# authorization (Objective-C)

**Framework:** Security Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Returns an authorization object initialized with a default environment, flags, and rights.

## Declaration

```objectivec
+ (id) authorization;
```

<a id="Return-value"></a>

## Return value

The authorization object.

## See Also

### Allocating and initializing an authorization object

- [authorizationWithFlags:rights:environment:](authorization%28with_rights_environment_%29.md): Returns an authorization object initialized with the specified flags, rights and environment.
- [init](init%28%29.md): Initializes an authorization object with default environment, flags, and rights.
- [initWithFlags:rights:environment:](init%28flags_rights_environment_%29.md): Initializes an authorization object with the specified flags, rights, and environment.
