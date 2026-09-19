> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1560551-postscript_data_formats

# PostScript Data Formats

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Specify constants that indicate the format of PostScript data.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [cmPS7bit](1560551-postscript_data_formats/cmps7bit.md): The data is 7-bit safe—therefore the data could be in 7-bit ASCII encoding or in ASCII base-85 encoding.
- [cmPS8bit](1560551-postscript_data_formats/cmps8bit.md): The data is 8-bit safe—therefore the data could be in 7-bit or 8-bit ASCII encoding.
