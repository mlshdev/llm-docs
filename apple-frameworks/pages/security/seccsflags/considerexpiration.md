> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccsflags/considerexpiration](https://developer.apple.com/documentation/security/seccsflags/considerexpiration)

# considerExpiration (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Consider expired certificates invalid.

## Declaration

```swift
static var considerExpiration: SecCSFlags { get }
```

<a id="Discussion"></a>

## Discussion

When passed to a function that performs code validation, this flag requests that code signatures made by expired certificates be rejected. By default, expiration of participating certificates is not automatic grounds for rejection.

# kSecCSConsiderExpiration (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Consider expired certificates invalid.

## Declaration

```objectivec
kSecCSConsiderExpiration
```

<a id="Discussion"></a>

## Discussion

When passed to a function that performs code validation, this flag requests that code signatures made by expired certificates be rejected. By default, expiration of participating certificates is not automatic grounds for rejection.
