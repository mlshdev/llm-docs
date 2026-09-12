> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidelement/conformsto](https://developer.apple.com/documentation/hiddriverkit/iohidelement/conformsto)

# conformsTo

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+ · macOS

## Declaration

```objectivec
virtual bool conformsTo(uint32_t usagePage, uint32_t usage);
```

## Parameters

- `usagePage`: The usage page to check for conformity.
- `usage`: The usage to check for conformity.

<a id="return-value"></a>

## Return Value

Returns a bool specifying if the element conforms to the provided usage page and usage.

<a id="Discussion"></a>

## Discussion

Checks if the element conforms to the provided usage page and usage somewhere in its hierarchy.
