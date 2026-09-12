> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/postscript_injection_placement_options](https://developer.apple.com/documentation/applicationservices/core_printing/postscript_injection_placement_options)

# PostScript Injection Placement Options

**Interface language:** Objective-C

**Framework:** Application Services

Constants that specify where in the print job to inject PostScript code.

## Declaration

```objectivec
typedef UInt16 PSInjectionPlacement;
enum {
   kPSInjectionBeforeSubsection = 1,
   kPSInjectionAfterSubsection = 2,
   kPSInjectionReplaceSubsection = 3
};
```

## Topics

### Constants

- [kPSInjectionBeforeSubsection](postscript_injection_placement_options/kpsinjectionbeforesubsection.md): Specifies that your PostScript code be inserted before the standard PostScript code that is normally emitted for the subsection.
- [kPSInjectionAfterSubsection](postscript_injection_placement_options/kpsinjectionaftersubsection.md): Specifies that your PostScript code be inserted after the standard PostScript code that is normally emitted for the subsection.
- [kPSInjectionReplaceSubsection](postscript_injection_placement_options/kpsinjectionreplacesubsection.md): Specifies that your PostScript code replace the standard PostScript code that is normally emitted for the subsection.
