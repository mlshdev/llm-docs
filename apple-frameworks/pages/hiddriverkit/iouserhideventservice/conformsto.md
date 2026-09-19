> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iouserhideventservice/conformsto

# conformsTo

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Returns a Boolean value that indicates whether the service conforms to the specified HID usage and page information.

## Declaration

```objectivec
virtual bool conformsTo(uint32_t usagePage, uint32_t usage);
```

## Parameters

- `usagePage`: The HID usage page value.
- `usage`: The HID usage value from the specified page.

<a id="return-value"></a>

## Return Value

`true` if the service conforms to the specified usage and page information, or `false` if it doesn’t.

<a id="Discussion"></a>

## Discussion

Use this method to determine if a service is able to provide the specified type of data. This method iterates over the properties of the service’s provider object to look for the specified usage and page information, returning `true` if it finds an exact match.
