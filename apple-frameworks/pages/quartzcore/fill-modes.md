> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/fill-modes](https://developer.apple.com/documentation/quartzcore/fill-modes)

# Fill Modes (Swift)

**Framework:** Core Animation  
**Kind:** API Collection

These constants determine how the timed object behaves once its active duration has completed. They are used with the [fillMode](camediatiming/fillmode.md) property.

## Topics

### Constants

- [removed](camediatimingfillmode/removed.md): The receiver is removed from the presentation when the animation is completed.
- [forwards](camediatimingfillmode/forwards.md): The receiver remains visible in its final state when the animation is completed.
- [backwards](camediatimingfillmode/backwards.md): The receiver clamps values before zero to zero when the animation is completed.
- [both](camediatimingfillmode/both.md): The receiver clamps values at both ends of the object’s time space

# Fill Modes (Objective-C)

**Framework:** Core Animation  
**Kind:** API Collection

These constants determine how the timed object behaves once its active duration has completed. They are used with the [fillMode](camediatiming/fillmode.md) property.

## Topics

### Constants

- [kCAFillModeRemoved](camediatimingfillmode/removed.md): The receiver is removed from the presentation when the animation is completed.
- [kCAFillModeForwards](camediatimingfillmode/forwards.md): The receiver remains visible in its final state when the animation is completed.
- [kCAFillModeBackwards](camediatimingfillmode/backwards.md): The receiver clamps values before zero to zero when the animation is completed.
- [kCAFillModeBoth](camediatimingfillmode/both.md): The receiver clamps values at both ends of the object’s time space
- [kCAFillModeFrozen](kcafillmodefrozen.md): The mode was deprecated before OS X v10.5 shipped.
