> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/twolevel_hint](https://developer.apple.com/documentation/kernel/twolevel_hint)

# twolevel_hint

**Interface language:** Objective-C

**Framework:** Kernel  
**Availability:** macOS 10.6+

## Declaration

```objectivec
struct twolevel_hint {
    ...
};
```

## Topics

### Instance Properties

- [isub_image](twolevel_hint/1525623-isub_image.md): The subimage in which the symbol is defined. It is an index into the list of images that make up the umbrella image. If this field is 0, the symbol is in the umbrella image itself. If the image is not an umbrella framework or library, this field is 0.
- [itoc](twolevel_hint/1525807-itoc.md): The symbol index into the table of contents of the image specified by the `isub_image` field.
