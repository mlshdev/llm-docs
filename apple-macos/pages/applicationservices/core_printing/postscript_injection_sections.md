> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/postscript_injection_sections](https://developer.apple.com/documentation/applicationservices/core_printing/postscript_injection_sections)

# PostScript Injection Sections

**Interface language:** Objective-C

**Framework:** Application Services

Constants that specify keys for PostScript injection section values.

## Declaration

```objectivec
typedef SInt32 PSInjectionSection;
enum {
   kInjectionSectJob = 1,
   kInjectionSectCoverPage = 2
};
```

## Topics

### Constants

- [kInjectionSectJob](postscript_injection_sections/kinjectionsectjob.md): Specifies the job section. This is the default section if you do not specify a section key explicitly.
- [kInjectionSectCoverPage](postscript_injection_sections/kinjectionsectcoverpage.md): Specifies the cover page section. Currently unsupported.
