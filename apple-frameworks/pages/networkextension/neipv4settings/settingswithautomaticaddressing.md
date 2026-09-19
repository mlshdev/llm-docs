> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neipv4settings/settingswithautomaticaddressing

# settingsWithAutomaticAddressing

**Interface language:** Objective-C

**Framework:** Network Extension  
**Kind:** Type Method

## Declaration

```objectivec
+ (instancetype) settingsWithAutomaticAddressing;
```

<a id="return-value"></a>

## Return Value

The initialized object.

<a id="discussion"></a>

## Discussion

Create a NEIPv4Settings object that will obtain IP addresses and netmasks using DHCP.
