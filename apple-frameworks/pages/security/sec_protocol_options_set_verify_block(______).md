> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_set_verify_block(_:_:_:)](https://developer.apple.com/documentation/security/sec_protocol_options_set_verify_block(_:_:_:))

# sec_protocol_options_set_verify_block(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_protocol_options_set_verify_block(_ options: sec_protocol_options_t, _ verify_block: @escaping sec_protocol_verify_t, _ verify_block_queue: dispatch_queue_t)
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.

<a id="discussion"></a>

## Discussion

Set the verify block.

```
 A `sec_protocol_verify_t` block.
```

```
 A `dispatch_queue_t` on which the verify block should be called.
```

# sec_protocol_options_set_verify_block (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
void sec_protocol_options_set_verify_block(sec_protocol_options_t options, sec_protocol_verify_t verify_block, dispatch_queue_t verify_block_queue);
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.

<a id="discussion"></a>

## Discussion

Set the verify block.

```
 A `sec_protocol_verify_t` block.
```

```
 A `dispatch_queue_t` on which the verify block should be called.
```
