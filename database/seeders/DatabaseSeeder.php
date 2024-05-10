<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            "name" => "Ahmad Rafi",
            "email" => "rafia9005@gmail.com",
            "password" => bcrypt("admin123"),
            "email_verified_at" => "2024-05-10 13:18:30"
        ]);
    }
}
