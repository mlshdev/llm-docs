> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/dhcpclientpreferencessetapplicationoptions](https://developer.apple.com/documentation/systemconfiguration/dhcpclientpreferencessetapplicationoptions)

# DHCPClientPreferencesSetApplicationOptions

**Interface language:** Objective-C

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Updates the DHCP client preferences to include the specified list of options for the specified application ID.

## Declaration

```objectivec
Boolean DHCPClientPreferencesSetApplicationOptions(CFStringRef applicationID, const UInt8 *options, CFIndex count);
```

## Parameters

- `applicationID`: The application’s preference ID (for example, “com.apple.SystemPreferences”).
- `options`: An array of 8-bit values containing the DHCP option codes for the specified application ID (see RFC 2132 for more information on these codes). Pass `NULL` to clear the list of options for this application ID.
- `count`: The number of elements in `options`.

<a id="return-value"></a>

## Return Value

`TRUE` if the operation succeeded; otherwise, `FALSE`.

## See Also

### Group

- [DHCPClientPreferencesCopyApplicationOptions](dhcpclientpreferencescopyapplicationoptions.md): Returns the list of options for the specified application ID.
