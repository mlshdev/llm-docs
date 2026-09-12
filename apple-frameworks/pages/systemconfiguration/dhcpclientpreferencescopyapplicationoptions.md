> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/dhcpclientpreferencescopyapplicationoptions](https://developer.apple.com/documentation/systemconfiguration/dhcpclientpreferencescopyapplicationoptions)

# DHCPClientPreferencesCopyApplicationOptions

**Interface language:** Objective-C

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the list of options for the specified application ID.

## Declaration

```objectivec
UInt8 *DHCPClientPreferencesCopyApplicationOptions(CFStringRef applicationID, CFIndex *count);
```

## Parameters

- `applicationID`: The application’s preference ID (for example, “com.apple.SystemPreferences”).
- `count`: The number of elements in the list of options.

<a id="return-value"></a>

## Return Value

The list of options for the specified application ID, or `NULL` if no options are defined or if an error occurred. Use free(3) to release a non-`NULL` return value.

## See Also

### Group

- [DHCPClientPreferencesSetApplicationOptions](dhcpclientpreferencessetapplicationoptions.md): Updates the DHCP client preferences to include the specified list of options for the specified application ID.
