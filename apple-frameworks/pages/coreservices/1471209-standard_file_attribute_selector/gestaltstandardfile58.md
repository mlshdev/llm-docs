> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471209-standard_file_attribute_selector/gestaltstandardfile58](https://developer.apple.com/documentation/coreservices/1471209-standard_file_attribute_selector/gestaltstandardfile58)

# gestaltStandardFile58

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltStandardFile58 = 0
```

<a id="discussion"></a>

## Discussion

If the `gestaltStandardFile58` flag bit is set, you can call the four new procedures—`StandardPutFile`, `StandardGetFile`, `CustomPutFile`, and `CustomGetFile`—introduced with System 7. (The name of the constant reflects the enabling of selectors 5 through 8 on the trap macro that handles the Standard File Package.)
