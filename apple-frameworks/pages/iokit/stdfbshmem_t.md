> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/stdfbshmem_t](https://developer.apple.com/documentation/iokit/stdfbshmem_t)

# StdFBShmem_t

**Interface language:** Objective-C

**Framework:** IOKit  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

## Declaration

```objectivec
struct StdFBShmem_t {
    ...
};
```

<a id="discussion"></a>

## Discussion

This structure contains cursor and window server state data and occupies a slice of shared memory between the kernel and window server. Several elements of this structure are only used in software cursor mode. Unless otherwise indicated, the coordinates in this structure are given in display space. Display space is the coordinate space that encompasses all the screens. The positions of the screens within display space indicate their location relative to each other as the cursor moves between them. If there is only one screen, the screen coordinates and display space coordinates will be the same.

## Topics

### Fields

- [cursorSema](stdfbshmem_t/1589162-cursorsema.md): Semaphore lock for write access to the shared data in this structure.
- [frame](stdfbshmem_t/1589173-frame.md): The current cursor frame index.
- [cursorShow](stdfbshmem_t/1589134-cursorshow.md): The cursor is displayed when cursorShow is 0.
- [cursorObscured](stdfbshmem_t/1589153-cursorobscured.md): If this is true, the cursor has been obscured and cursorShow should not be 0. The cursor will be shown again the next time it is moved.
- [shieldFlag](stdfbshmem_t/1589159-shieldflag.md): When this is set to true the cursor will not be displayed in the region specified by shieldRect.
- [shielded](stdfbshmem_t/1589142-shielded.md): True if the cursor has been hidden because it entered the shielded region.
- [saveRect](stdfbshmem_t/1589184-saverect.md): The region that is saved underneath the cursor in software cursor mode.
- [shieldRect](stdfbshmem_t/1589143-shieldrect.md): The region that the cursor will not be displayed in if shieldFlag is true.
- [cursorLoc](stdfbshmem_t/1589169-cursorloc.md): The location of the cursor hot spot.
- [cursorRect](stdfbshmem_t/1589191-cursorrect.md): The region that the cursor image currently occupies in software cursor mode.
- [oldCursorRect](stdfbshmem_t/1589164-oldcursorrect.md): The region that the cursor image occupied the last time the cursor was drawn in software cursor mode.
- [screenBounds](stdfbshmem_t/1589171-screenbounds.md): The region that the current screen occupies.
- [version](stdfbshmem_t/1589186-version.md): Contains kIOFBCurrentShmemVersion so that a user client can ensure it is using the same version of this structure as the kernel.
- [structSize](stdfbshmem_t/1589192-structsize.md): Contains the size of this structure.
- [vblTime](stdfbshmem_t/1589189-vbltime.md): The time of the most recent vertical blanking.
- [vblDelta](stdfbshmem_t/1589151-vbldelta.md): The interval between the two most recent vertical blankings.
- [vblCount](stdfbshmem_t/1589179-vblcount.md): A running count of vertical blank interrupts.
- [reservedC](stdfbshmem_t/1589141-reservedc.md): Reserved for future use.
- [hardwareCursorCapable](stdfbshmem_t/1589150-hardwarecursorcapable.md): True if the hardware is capable of using hardware cursor mode.
- [hardwareCursorActive](stdfbshmem_t/1589174-hardwarecursoractive.md): True if currently using the hardware cursor mode.
- [reservedB](stdfbshmem_t/1589172-reservedb.md): Reserved for future use.
- [cursorSize](stdfbshmem_t/1589187-cursorsize.md): This array contains the cursor sizes indexed by frame.
- [hotSpot](stdfbshmem_t/1589183-hotspot.md): This array contains the location of the cursor hot spots indexed by frame. The hot spots coordinates are given relative to the top left corner of the cursor image.
- [cursor](stdfbshmem_t/1589137-cursor.md): A union of structures that define the cursor images. The structure used depends on the framebuffer's bit depth. These structures are defined above.

### Instance Properties

- [hardwareCursorFlags](stdfbshmem_t/1589163-hardwarecursorflags.md)
- [hardwareCursorShields](stdfbshmem_t/1589196-hardwarecursorshields.md)
