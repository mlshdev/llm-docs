> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iohidelement/getcookie

# getCookie

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

## Declaration

```objectivec
virtual IOHIDElementCookie getCookie();
```

<a id="return-value"></a>

## Return Value

Returns the element cookie. The cookie is a unique identifier of the element.

## See Also

### Identifying the Element

- [IOHIDElementCookie](../iohidelementcookie.md): A type that an element uses to distinguish itself from other elements.
