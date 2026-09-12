> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/carbon_accessibility/parameterized_attributes](https://developer.apple.com/documentation/applicationservices/carbon_accessibility/parameterized_attributes)

# Parameterized Attributes

**Interface languages:** Swift, Objective-C

**Framework:** Application Services  
**Kind:** API Collection

Define the parameterized attributes an accessibility object can have.

<a id="overview"></a>

## Overview

Parameterized attributes allow you to pass in additional values to get more specific information about the text associated with an accessibility object.

## Topics

### Constants

- [kAXLineForIndexParameterizedAttribute](../kaxlineforindexparameterizedattribute.md): Given an indexed character, the line number of the text associated with this accessibility object that contains the character.
- [kAXRangeForLineParameterizedAttribute](../kaxrangeforlineparameterizedattribute.md): Given a line number, the range of characters of the text associated with this accessibility object that contains the line number.
- [kAXStringForRangeParameterizedAttribute](../kaxstringforrangeparameterizedattribute.md): A substring of the text associated with this accessibility object that is specified by the given character range.
- [kAXRangeForPositionParameterizedAttribute](../kaxrangeforpositionparameterizedattribute.md)
- [kAXRangeForIndexParameterizedAttribute](../kaxrangeforindexparameterizedattribute.md)
- [kAXBoundsForRangeParameterizedAttribute](../kaxboundsforrangeparameterizedattribute.md): The bounding rectangle of the text associated with this accessibility object that is specified by the given range. This is the bounding rectangle a sighted user would see on the display screen, in pixels.
- [kAXRTFForRangeParameterizedAttribute](../kaxrtfforrangeparameterizedattribute.md): The RTF representation of the text associated with this accessibility object that is specified by the given range.
- [kAXAttributedStringForRangeParameterizedAttribute](../kaxattributedstringforrangeparameterizedattribute.md): The CFAttributedStringType representation of the text associated with this accessibility object that is specified by the given range.
- [kAXStyleRangeForIndexParameterizedAttribute](../kaxstylerangeforindexparameterizedattribute.md): Given a character index, the range of text associated with this accessibility object over which the style in effect at that character index applies.

## See Also

### Accessibility Object Constants

- [Roles](roles.md): Define the values an accessibility object’s role attribute can have.
- [Subroles](subroles.md): Define the values for an accessibility object’s subrole attribute.
- [Attributes](attributes.md): Define the attributes available for accessibility objects.
- [Actions](actions.md): Define the actions an accessibility object can perform.
- [Notifications](notifications.md): Define the notifications that can be broadcast by an accessibility object.
- [Orientations and Sort Directions](orientations_and_sort_directions.md): Define the values for the orientation and sort-direction attributes of some accessibility objects.
