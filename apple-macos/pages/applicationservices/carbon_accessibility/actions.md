> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/carbon_accessibility/actions](https://developer.apple.com/documentation/applicationservices/carbon_accessibility/actions)

# Actions

**Interface languages:** Swift, Objective-C

**Framework:** Application Services  
**Kind:** API Collection

Define the actions an accessibility object can perform.

## Topics

### Constants

- [kAXPressAction](../kaxpressaction.md): Simulates a single click, such as on a button.
- [kAXIncrementAction](../kaxincrementaction.md): Increments the value of the accessibility object. The amount the value is incremented by is determined by the value of the `kAXValueIncrementAttribute` attribute.
- [kAXDecrementAction](../kaxdecrementaction.md): Decrements the value of the accessibility object. The amount the value is decremented by is determined by the value of the `kAXValueIncrementAttribute` attribute.
- [kAXConfirmAction](../kaxconfirmaction.md): Simulates pressing the Return key.
- [kAXCancelAction](../kaxcancelaction.md): Simulates pressing a Cancel button.
- [kAXRaiseAction](../kaxraiseaction.md): Causes a window to become as frontmost as is allowed by the containing application’s circumstances. Note that an application’s floating windows (such as inspector windows) might remain above a window that performs the raise action.
- [kAXShowMenuAction](../kaxshowmenuaction.md)

## See Also

### Accessibility Object Constants

- [Roles](roles.md): Define the values an accessibility object’s role attribute can have.
- [Subroles](subroles.md): Define the values for an accessibility object’s subrole attribute.
- [Attributes](attributes.md): Define the attributes available for accessibility objects.
- [Parameterized Attributes](parameterized_attributes.md): Define the parameterized attributes an accessibility object can have.
- [Notifications](notifications.md): Define the notifications that can be broadcast by an accessibility object.
- [Orientations and Sort Directions](orientations_and_sort_directions.md): Define the values for the orientation and sort-direction attributes of some accessibility objects.
