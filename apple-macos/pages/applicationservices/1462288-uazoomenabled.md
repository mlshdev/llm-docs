> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462288-uazoomenabled](https://developer.apple.com/documentation/applicationservices/1462288-uazoomenabled)

# UAZoomEnabled() (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Determines if the Universal Access zoom feature is enabled.

## Declaration

```swift
func UAZoomEnabled() -> Bool
```

<a id="return_value"></a>

## Return Value

Returns `true` if the Universal Access zoom feature is on, `false` if the zoom feature is off or if the user has zoomed all the way out.

## See Also

### Miscellaneous

- [UAZoomChangeFocus(\_:\_:\_:)](1458830-uazoomchangefocus.md): Tells the Universal Access zoom feature where it should focus.

# UAZoomEnabled (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Determines if the Universal Access zoom feature is enabled.

## Declaration

```objectivec
Boolean UAZoomEnabled(void);
```

<a id="return_value"></a>

## Return Value

Returns `true` if the Universal Access zoom feature is on, `false` if the zoom feature is off or if the user has zoomed all the way out.

## See Also

### Miscellaneous

- [UAZoomChangeFocus](1458830-uazoomchangefocus.md): Tells the Universal Access zoom feature where it should focus.
