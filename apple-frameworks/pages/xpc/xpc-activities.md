> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc-activities](https://developer.apple.com/documentation/xpc/xpc-activities)

# XPC activities (Swift)

**Framework:** XPC  
**Kind:** API Collection

Schedule background activities for the system to execute.

## Topics

### Registration

- [xpc_activity_register(\_:\_:\_:)](xpc_activity_register%28______%29.md): Registers an activity with the system.
- [xpc_activity_unregister(\_:)](xpc_activity_unregister%28__%29.md): Unregisters an activity with the specified identifier.
- [XPC_ACTIVITY_CHECK_IN](xpc_activity_check_in.md): A constant to check in with the system for a previously registered activity using the same identifier.
- [xpc_activity_t](xpc_activity_t.md): An XPC activity object.
- [xpc_activity_handler_t](xpc_activity_handler_t.md): A block to call when an XPC activity becomes eligible to run.

### State

- [xpc_activity_get_state(\_:)](xpc_activity_get_state%28__%29.md): Returns the current state of an activity.
- [xpc_activity_set_state(\_:\_:)](xpc_activity_set_state%28____%29.md): Updates the current state of an activity.
- [xpc_activity_should_defer(\_:)](xpc_activity_should_defer%28__%29.md): Tests whether to defer an activity.
- [xpc_activity_state_t](xpc-activity-state-t-swift-consts.md): A type that represents the state of an activity.
- [xpc_activity_state_t](xpc_activity_state_t.md): A type that represents the state of an activity.
- [XPC_ACTIVITY_STATE_CHECK_IN](xpc_activity_state_check_in.md): The activity has completed a check-in with the system.
- [XPC_ACTIVITY_STATE_WAIT](xpc_activity_state_wait.md): The activity is waiting for an opportunity to run.
- [XPC_ACTIVITY_STATE_RUN](xpc_activity_state_run.md): The activity is eligible to run according to its criteria.
- [XPC_ACTIVITY_STATE_DEFER](xpc_activity_state_defer.md): The activity needs to wait until it satisfies its criteria again.
- [XPC_ACTIVITY_STATE_CONTINUE](xpc_activity_state_continue.md): The activity continues its operation beyond the return of its handler block.
- [XPC_ACTIVITY_STATE_DONE](xpc_activity_state_done.md): The activity is complete.

### Execution criteria

- [xpc_activity_copy_criteria(\_:)](xpc_activity_copy_criteria%28__%29.md): Returns an XPC dictionary that describes the execution criteria of an activity.
- [xpc_activity_set_criteria(\_:\_:)](xpc_activity_set_criteria%28____%29.md): Modifies the execution criteria of an activity.

### Scheduling

- [XPC_ACTIVITY_REPEATING](xpc_activity_repeating.md): A Boolean property that indicates whether this is a repeating activity.
- [XPC_ACTIVITY_DELAY](xpc_activity_delay.md): An integer property that indicates the number of seconds to delay before beginning the activity.
- [XPC_ACTIVITY_GRACE_PERIOD](xpc_activity_grace_period.md): An integer property that indicates the number of seconds to allow as a grace period before the scheduling of the activity becomes more aggressive.

### Time Intervals

- [XPC_ACTIVITY_INTERVAL](xpc_activity_interval.md): An integer property that indicates the desired time interval of the activity in seconds.
- [XPC_ACTIVITY_INTERVAL_1_MIN](xpc_activity_interval_1_min.md): A constant that represents a 1-minute time interval.
- [XPC_ACTIVITY_INTERVAL_5_MIN](xpc_activity_interval_5_min.md): A constant that represents a 5-minute time interval.
- [XPC_ACTIVITY_INTERVAL_15_MIN](xpc_activity_interval_15_min.md): A constant that represents a 15-minute time interval.
- [XPC_ACTIVITY_INTERVAL_30_MIN](xpc_activity_interval_30_min.md): A constant that represents a 30-minute time interval.
- [XPC_ACTIVITY_INTERVAL_1_HOUR](xpc_activity_interval_1_hour.md): A constant that represents a 1-hour time interval.
- [XPC_ACTIVITY_INTERVAL_4_HOURS](xpc_activity_interval_4_hours.md): A constant that represents a 4-hour time interval.
- [XPC_ACTIVITY_INTERVAL_8_HOURS](xpc_activity_interval_8_hours.md): A constant that represents an 8-hour time interval.
- [XPC_ACTIVITY_INTERVAL_1_DAY](xpc_activity_interval_1_day.md): A constant that represents a one-day time interval.
- [XPC_ACTIVITY_INTERVAL_7_DAYS](xpc_activity_interval_7_days.md): A constant that represents a seven-day time interval.

### Priority

- [XPC_ACTIVITY_PRIORITY](xpc_activity_priority.md): A string property that indicates the priority of the activity.
- [XPC_ACTIVITY_PRIORITY_MAINTENANCE](xpc_activity_priority_maintenance.md): A string that indicates an activity is maintenance priority.
- [XPC_ACTIVITY_PRIORITY_UTILITY](xpc_activity_priority_utility.md): A string that indicates an activity is utility priority.

### Power consumption

- [XPC_ACTIVITY_ALLOW_BATTERY](xpc_activity_allow_battery.md): A Boolean value that indicates whether to allow the activity to run while the computer is on battery power.
- [XPC_ACTIVITY_REQUIRE_SCREEN_SLEEP](xpc_activity_require_screen_sleep.md): A Boolean value that indicates whether the activity performs only while the primary screen is in sleep mode.
- [XPC_ACTIVITY_PREVENT_DEVICE_SLEEP](xpc_activity_prevent_device_sleep.md): A Boolean that indicates whether the activity prevents the system from sleeping while on battery power.

### Deprecated

- [XPC_ACTIVITY_REQUIRE_BATTERY_LEVEL](xpc_activity_require_battery_level.md): Deprecated. An integer percentage of minimum battery charge required to allow the activity to run.
- [XPC_ACTIVITY_REQUIRE_HDD_SPINNING](xpc_activity_require_hdd_spinning.md): Deprecated. A Boolean value indicating whether the activity should only be performed while the hard disk drive (HDD) is spinning.

# XPC activities (Objective-C)

**Framework:** XPC  
**Kind:** API Collection

Schedule background activities for the system to execute.

## Topics

### Registration

- [xpc_activity_register](xpc_activity_register%28______%29.md): Registers an activity with the system.
- [xpc_activity_unregister](xpc_activity_unregister%28__%29.md): Unregisters an activity with the specified identifier.
- [XPC_ACTIVITY_CHECK_IN](xpc_activity_check_in.md): A constant to check in with the system for a previously registered activity using the same identifier.
- [xpc_activity_t](xpc_activity_t.md): An XPC activity object.
- [xpc_activity_handler_t](xpc_activity_handler_t.md): A block to call when an XPC activity becomes eligible to run.

### State

- [xpc_activity_get_state](xpc_activity_get_state%28__%29.md): Returns the current state of an activity.
- [xpc_activity_set_state](xpc_activity_set_state%28____%29.md): Updates the current state of an activity.
- [xpc_activity_should_defer](xpc_activity_should_defer%28__%29.md): Tests whether to defer an activity.
- [xpc_activity_state_t](xpc-activity-state-t-swift-consts.md): A type that represents the state of an activity.
- [xpc_activity_state_t](xpc_activity_state_t.md): A type that represents the state of an activity.
- [XPC_ACTIVITY_STATE_CHECK_IN](xpc_activity_state_check_in.md): The activity has completed a check-in with the system.
- [XPC_ACTIVITY_STATE_WAIT](xpc_activity_state_wait.md): The activity is waiting for an opportunity to run.
- [XPC_ACTIVITY_STATE_RUN](xpc_activity_state_run.md): The activity is eligible to run according to its criteria.
- [XPC_ACTIVITY_STATE_DEFER](xpc_activity_state_defer.md): The activity needs to wait until it satisfies its criteria again.
- [XPC_ACTIVITY_STATE_CONTINUE](xpc_activity_state_continue.md): The activity continues its operation beyond the return of its handler block.
- [XPC_ACTIVITY_STATE_DONE](xpc_activity_state_done.md): The activity is complete.

### Execution criteria

- [xpc_activity_copy_criteria](xpc_activity_copy_criteria%28__%29.md): Returns an XPC dictionary that describes the execution criteria of an activity.
- [xpc_activity_set_criteria](xpc_activity_set_criteria%28____%29.md): Modifies the execution criteria of an activity.

### Scheduling

- [XPC_ACTIVITY_REPEATING](xpc_activity_repeating.md): A Boolean property that indicates whether this is a repeating activity.
- [XPC_ACTIVITY_DELAY](xpc_activity_delay.md): An integer property that indicates the number of seconds to delay before beginning the activity.
- [XPC_ACTIVITY_GRACE_PERIOD](xpc_activity_grace_period.md): An integer property that indicates the number of seconds to allow as a grace period before the scheduling of the activity becomes more aggressive.

### Time Intervals

- [XPC_ACTIVITY_INTERVAL](xpc_activity_interval.md): An integer property that indicates the desired time interval of the activity in seconds.
- [XPC_ACTIVITY_INTERVAL_1_MIN](xpc_activity_interval_1_min.md): A constant that represents a 1-minute time interval.
- [XPC_ACTIVITY_INTERVAL_5_MIN](xpc_activity_interval_5_min.md): A constant that represents a 5-minute time interval.
- [XPC_ACTIVITY_INTERVAL_15_MIN](xpc_activity_interval_15_min.md): A constant that represents a 15-minute time interval.
- [XPC_ACTIVITY_INTERVAL_30_MIN](xpc_activity_interval_30_min.md): A constant that represents a 30-minute time interval.
- [XPC_ACTIVITY_INTERVAL_1_HOUR](xpc_activity_interval_1_hour.md): A constant that represents a 1-hour time interval.
- [XPC_ACTIVITY_INTERVAL_4_HOURS](xpc_activity_interval_4_hours.md): A constant that represents a 4-hour time interval.
- [XPC_ACTIVITY_INTERVAL_8_HOURS](xpc_activity_interval_8_hours.md): A constant that represents an 8-hour time interval.
- [XPC_ACTIVITY_INTERVAL_1_DAY](xpc_activity_interval_1_day.md): A constant that represents a one-day time interval.
- [XPC_ACTIVITY_INTERVAL_7_DAYS](xpc_activity_interval_7_days.md): A constant that represents a seven-day time interval.

### Priority

- [XPC_ACTIVITY_PRIORITY](xpc_activity_priority.md): A string property that indicates the priority of the activity.
- [XPC_ACTIVITY_PRIORITY_MAINTENANCE](xpc_activity_priority_maintenance.md): A string that indicates an activity is maintenance priority.
- [XPC_ACTIVITY_PRIORITY_UTILITY](xpc_activity_priority_utility.md): A string that indicates an activity is utility priority.

### Power consumption

- [XPC_ACTIVITY_ALLOW_BATTERY](xpc_activity_allow_battery.md): A Boolean value that indicates whether to allow the activity to run while the computer is on battery power.
- [XPC_ACTIVITY_REQUIRE_SCREEN_SLEEP](xpc_activity_require_screen_sleep.md): A Boolean value that indicates whether the activity performs only while the primary screen is in sleep mode.
- [XPC_ACTIVITY_PREVENT_DEVICE_SLEEP](xpc_activity_prevent_device_sleep.md): A Boolean that indicates whether the activity prevents the system from sleeping while on battery power.

### Deprecated

- [XPC_ACTIVITY_REQUIRE_BATTERY_LEVEL](xpc_activity_require_battery_level.md): Deprecated. An integer percentage of minimum battery charge required to allow the activity to run.
- [XPC_ACTIVITY_REQUIRE_HDD_SPINNING](xpc_activity_require_hdd_spinning.md): Deprecated. A Boolean value indicating whether the activity should only be performed while the hard disk drive (HDD) is spinning.
