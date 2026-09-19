> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/stdfbshmem_t/1495726-cursorobscured

# cursorObscured

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

If this is true, the cursor has been obscured and cursorShow should not be 0. The cursor will be shown again the next time it is moved.

## Declaration

```objectivec
char cursorObscured;
```
