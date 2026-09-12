> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_are_equal(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_options_are_equal(_:_:))

# sec_protocol_options_are_equal(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func sec_protocol_options_are_equal(_ optionsA: sec_protocol_options_t, _ optionsB: sec_protocol_options_t) -> Bool
```

## Parameters

- `optionsA`: A `sec_protocol_options_t` instance.
- `optionsB`: A `sec_protocol_options_t` instance.

<a id="return-value"></a>

## Return Value

True if equal, and false otherwise.

<a id="discussion"></a>

## Discussion

Compare two `sec_protocol_options_t` instances.

# sec_protocol_options_are_equal (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
bool sec_protocol_options_are_equal(sec_protocol_options_t optionsA, sec_protocol_options_t optionsB);
```

## Parameters

- `optionsA`: A `sec_protocol_options_t` instance.
- `optionsB`: A `sec_protocol_options_t` instance.

<a id="return-value"></a>

## Return Value

True if equal, and false otherwise.

<a id="discussion"></a>

## Discussion

Compare two `sec_protocol_options_t` instances.
